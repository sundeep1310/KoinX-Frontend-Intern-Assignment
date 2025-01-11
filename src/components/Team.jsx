export function Team() {
    const teamMembers = [
      {
        name: "John Smith",
        position: "Designation here",
        image: "/team/john-smith.jpg",
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra."
      },
      {
        name: "Elina Williams",
        position: "Designation here",
        image: "/team/elina-williams.jpg",
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra."
      },
      {
        name: "John Smith",
        position: "Designation here",
        image: "/team/john-smith-2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra."
      }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-[#0F1629] mb-4">Team</h2>
        <p className="text-[#3E424A] leading-7 mb-6">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
  
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#E8F4FD] rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center text-center md:w-48 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-lg mb-2 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/team/placeholder.jpg';
                    }}
                  />
                  <h3 className="font-semibold text-[#0F1629]">{member.name}</h3>
                  <p className="text-[#788F9B] text-sm">{member.position}</p>
                </div>
                <p className="text-[#0F1629] leading-7">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }