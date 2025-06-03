'use client'
import { FaGoogle } from 'react-icons/fa'
import { supabase } from '../lib/supabase'
import Button from './KeyboardButton'

export default function Auth() {

    const isDev = process.env.NODE_ENV === 'development';

    const redirectTo = isDev
        ? 'http://localhost:3000'
        : 'https://cortexoverflow.vercel.app/MainTasks';

    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo
            }
        })

        if (error) {
            console.error('Erro ao logar com o Google: ', error.message)
        }
    }

    return (
        <div className='flex justify-center'>
            <Button 
                onClick={handleGoogleLogin}
                className='gap-2'
                > [ Log In ] <FaGoogle /> </Button>
        </div>
    )

}