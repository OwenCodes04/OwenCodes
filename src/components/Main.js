const Main = () => {
  return (
    <div className="flex">
      <div className="w-1/3 bg-blue-100 flex justify-center items-center">
        <img src="../assets/me.png" alt="Picture of me" />
      </div>
      <div className="w-2/3 bg-green-100 flex justify-center items-center">
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
                  <td className="px-4 py-2">December 2023 - Present</td>
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
      </div>
    </div>
  );
};

export default Main;