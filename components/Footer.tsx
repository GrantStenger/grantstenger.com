export function Footer() {
    return (
        <footer className="border-t border-gray-700 py-6 mt-auto">
            <div className="container mx-auto text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Grant Stenger. All rights reserved.
            </div>
        </footer>
    )
}