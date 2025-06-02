'use client'
import { FaGoogle } from 'react-icons/fa'
import { supabase } from '../lib/supabase'
import Button from './KeyboardButton'

export default function Auth() {
    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
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
                > [ connect ] <FaGoogle /> </Button>
        </div>
    )

}