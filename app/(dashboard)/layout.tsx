import NavBar from "@/components/navbar";


const DashboardLayout = async({
    children,
}: {
    children: React.ReactNode
}) => {
    
    return (
        <div className="relative h-full">
                <NavBar />
            <main >
                {children}
            </main>
            


        </div>

    )
}

export default DashboardLayout; 