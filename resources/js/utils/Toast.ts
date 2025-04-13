import { enqueueSnackbar } from "notistack"

export const errorToast = (message: string) => {
    enqueueSnackbar(message, { variant: 'error' })
}

export const successToast = (message: string) => {
    enqueueSnackbar(message, { variant: 'success' })
}

export const basicErrorToast = (errors: any) => errorToast(errors.error ? errors.error : 'Maaf, terjadi kesalahan')

