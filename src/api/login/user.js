
import { get, post } from '@/utils/http'

export const login = data => post('/login', data);
