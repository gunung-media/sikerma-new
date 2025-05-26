import Swal from "sweetalert2"

export const confirmationDelete = async (callback: () => void) => {
    const result = await Swal.fire({
        title: 'Apakah kamu yakin?',
        text: "Kamu tidak bisa mengembalikan data ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, yakin'
    })

    if (result.isConfirmed) {
        callback()
    }
}
