import * as z from 'zod';

export const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(24),
});

export type IAuth = z.infer<typeof authSchema>;
