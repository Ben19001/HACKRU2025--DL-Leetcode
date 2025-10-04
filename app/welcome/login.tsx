import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useState } from "react";

export function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const body = {
            email: username,
            password: password
        }

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={8}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8}/>
        </div>
        <button type="submit">Login</button>
    </form>

    </> 
  ) 
}
