
export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='mt-5 mb-3 text-center'>
            <h4>&copy; Car Machanic {year}</h4>
        </div>
    )
}
