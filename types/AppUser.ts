export interface AppUser {
    id: number,
    auth_user_id: string;
    name: string;
    silver_amount: number;
    gold_amount: number;
    gem_amount: number;
    account_level: number;
    last_reset: Date;
}