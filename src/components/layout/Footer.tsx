const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 mt-8 text-sm text-gray-500">
            <span>
                © {new Date().getFullYear()} Axel DS. Todos los derechos
                reservados.
            </span>
        </footer>
    )
}

export default Footer
