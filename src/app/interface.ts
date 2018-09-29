export interface User {
    email: string,
    password: string
}

export interface ApiError {
    error: string
}

export interface ApiResponse extends Response {
    error: ApiError
}

export interface UserData {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string
}