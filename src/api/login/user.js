
import { get, post } from '@/utils/http'

export const login = data => post('/login', data);
export const loginExit = p => post('/login-out', p);
