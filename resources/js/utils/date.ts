export const formatDate = (date: string) => {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const newDate = new Date(date);

    return `${newDate.getDate()} ${monthNames[newDate.getMonth()]}, ${newDate.getFullYear()}`
}
