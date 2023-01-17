import useSupabase from '../composables/useSupabase.js'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user
const user = ref(null)

export default function useAuthUser () {
  const { supabase } = useSupabase()
  const router = useRouter()

  /**
   * Login with google, github, etc
   */
  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) throw error
    router.push('/')
    return user
  }

  /**
   * Logout
   */
  const logout = async () => {
    const { error } = supabase.auth.signOut()
    router.push('/')
    if (error) throw error
  }

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {
    return !!user.value
  }

  const signInWithEmail = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'http://localhost:9000/#'
      }
    })
    if (error) throw error
    router.push('/')
    return data
  }

  return {
    user,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    signInWithEmail
  }
}
