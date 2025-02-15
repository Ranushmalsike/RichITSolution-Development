import React from 'react';

const SectionBloc: React.FC = () => {
    return (
        <div className="p-6">
        
            {/* 4-Column Grid Section */}
            <div className="container mx-auto p-6">
                <center><h2 className="text-2xl font-semibold mb-4">Top Services</h2></center>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Column 1 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src="/image/Leonardo_Phoenix_10_A_modern_workspace_with_a_laptop_displayin_2.jpg" alt="Service 1" className="w-full h-[200px] object-cover rounded-md" />
                        <h3 className="text-lg font-bold mt-2">Hosting</h3>
                        <p className="text-sm text-gray-600">A server room or data center with rows of servers, glowing lights, and cables. Alternatively, a cloud computing concept with a globe and digital network connections.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src="/image/Leonardo_Phoenix_10_A_modern_sleek_conference_room_with_a_midd_1.jpg" className="w-full h-[200px] object-cover rounded-md" />
                        <h3 className="text-lg font-bold mt-2">Web Development</h3>
                        <p className="text-sm text-gray-600">A modern workspace with a laptop displaying code (e.g., HTML, CSS, or JavaScript), a second monitor showing a website design, and a coffee cup on the side. Include subtle elements like a notepad, pens, or a plant to make it visually appealing.</p>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src="/image/Leonardo_Phoenix_10_A_modern_workspace_with_a_laptop_displayin_2.jpg" className="w-full h-[200px] object-cover rounded-md" />
                        <h3 className="text-lg font-bold mt-2">Android Developing</h3>
                        <p className="text-sm text-gray-600">A smartphone with an Android app interface being coded on a laptop. Include Android Studio or code snippets (Java/Kotlin) on the screen. Add a mobile app wireframe or design mockup for context.</p>
                    </div>

                    {/* Column 4 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src="/image/Leonardo_Phoenix_10_A_modern_sleek_conference_room_with_a_midd_1.jpg" alt="Service 4" className="w-full h-[200px] object-cover rounded-md" />
                        <h3 className="text-lg font-bold mt-2">IT Consulting</h3>
                        <p className="text-sm text-gray-600">A professional setting with a consultant in a suit discussing IT solutions with a client. Include a whiteboard with diagrams, a laptop, and a handshake to symbolize collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionBloc;