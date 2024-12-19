import { enqueueSnackbar } from "notistack"

export const errorToast = (message: string) => {
    enqueueSnackbar(message, {
        variant: 'error',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        }
    })
}

export const successToast = (message: string) => {
    enqueueSnackbar(message, {
        variant: 'success',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        }
    })
}

export const basicErrorToast = (errors: any) => errorToast(errors.error ? errors.error : 'Something went wrong')

