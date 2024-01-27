const Jobs = () => {
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto p-4">
        <table className="table w-auto mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th className="px-4 py-2">Employment Period</th>
              <th className="px-4 py-2">Employer</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Skills Learned</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <td classname="px-4 py-2">December 2023 - Present</td>
              <td className="px-4 py-2">Byte Cloud Services</td>
              <td className="px-4 py-2">Full Stack Developer</td>
              <td className="px-4 py-2">Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
            <td className="px-4 py-2">September 2023-December 2023</td>
            <td className="px-4 py-2">Byte Cloud Services</td>
              <td className="px-4 py-2">Web Developer</td>
              <td className="px-4 py-2">Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );  
};

export default Jobs;