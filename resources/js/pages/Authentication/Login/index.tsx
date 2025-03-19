import { Button } from "@/Components/Button";
import { Checkbox } from "@/Components/Checkbox";
import { Input } from "@/Components/Input";
import { GuestLayout } from "@/Layouts/Guest";
import { PageProps } from "@/types";
import { basicErrorToast, successToast } from "@/utils/Toast";
import { router, usePage } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export default function Login() {
    const { errors } = usePage<PageProps>().props
    const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false)

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value, type, checked } = e.target;
        if (!name) return;

        const inputValue = type === 'checkbox' ? checked : value;
        setData({
            ...data,
            [name]: inputValue
        })
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        router.post('/login', data, {
            onError: (errors) => {
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Logged in successfully')
            }
        })
    }

    return (
        <GuestLayout>
            <h4 className="mb-1">Login</h4>
            <p className="mb-6">Please sign-in to your account and start the adventure</p>
            <form className="mb-6" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Input
                        type="text"
                        name="username"
                        label="Username"
                        placeholder="Silahkan masukkan username"
                        errorMessage={errors.username}
                        value={data.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type={isOpenPassword ? 'text' : 'password'}
                        name="password"
                        label="Password"
                        placeholder="**********"
                        errorMessage={errors.password}
                        isGroup
                        value={data.password}
                        onChange={handleInputChange}
                    >
                        <span className="input-group-text cursor-pointer" onClick={() => setIsOpenPassword(!isOpenPassword)}>
                            <i className={`bx bx-${isOpenPassword ? 'hide' : 'show'}`}></i>
                        </span>
                    </Input>
                </div>
                <div className="mb-8">
                    <div className="d-flex justify-content-between mt-8">
                        <Checkbox
                            label="Remember Me"
                            checked={data.remember}
                            name="remember"
                            onChange={handleInputChange}
                        />
                        <a href="#">
                            <span>Forgot Password?</span>
                        </a>
                    </div>
                </div>
                <div className="mb-6">
                    <Button className="d-grid w-100" value="Login" isSubmit />
                </div>
            </form>
        </GuestLayout>
    )
}
