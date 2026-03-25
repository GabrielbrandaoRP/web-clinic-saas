export const getPersonService = async (pageIndex: number, globalFilter: string) => {
    const page = pageIndex + 1;
    
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${globalFilter}`)
    return res.json()
}