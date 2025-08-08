import MainLayout from "../../components/MainLayout";



export default function Cookiess() {
  

    return (
        <>
            <MainLayout>
                <div className="">
                    {/* Hero Section */}
                    <div className="relative h-[414px] cookies-container" >
                        <div className="absolute inset-0 flex items-center justify-start">
                            <div className="px-10">
                                <h1 className="font-rasa font-[700] sm:text-[64px] text-[50px] text-white text-shadow-custom mb-8">Cookies</h1>
                                <p className="font-sansation font-[700] sm:text-[20px] text-[15px] text-white text-shadow-custom mb-2">We use cookies at Latrice to enhance your browsing experience and<br /> personalize our services.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto py-10 px-2 space-y-10">
                        {[...Array(5)].map((_, index) => (
                            <div key={index}>
                                <h2 className="font-poppins font-[600] sm:text-[18px] text-[15px] text-charcoal  mb-2">Lorem Ipsum is simply dummy text</h2>
                                <ul className="list-disc list-inside space-y-2 font-poppins font-[400] sm:text-[18px] text-[15px] text-charcoal">
                                    <li>
                                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s.
                                    </li>
                                    <li>
                                        When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </li>
                                    <li>
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                        essentially unchanged.
                                    </li>
                                    <li>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                    </li>
                                    <li>
                                        More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
