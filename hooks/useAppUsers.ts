import { useUserContext } from '@/context/UserContext';
import { updateUserCurrency } from '@/services/userServices';

export function useAppUser() {
    const { userData, refreshUserData } = useUserContext();
    
    async function exchangeCurrency(type: 'toGold' | 'toGem') {
        if (!userData?.id) return;

        switch (type) {
            case 'toGold':
                if ( userData?.silver_amount >= 10 ) {
                    const newSilver = userData.silver_amount - 10;
                    const newGold = userData.gold_amount + 1;
                    updateUserCurrency(newSilver, 'silver_amount', userData.id);
                    updateUserCurrency(newGold, 'gold_amount', userData.id);
                    refreshUserData();
                }
                break;

            case 'toGem':
                if ( userData?.gold_amount >= 5 ) {
                    const newGold = userData.gold_amount - 5;
                    const newGems = userData.gem_amount + 1;
                    updateUserCurrency(newGold, 'gold_amount', userData.id);
                    updateUserCurrency(newGems, 'gem_amount', userData.id);
                    refreshUserData();
                }
                break;

            default: alert("Moedas Insuficientes");
                break;
        }
    }

    return {
        exchangeCurrency
    }
}
