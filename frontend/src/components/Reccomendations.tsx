const Recommendations = () => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="2">
              <h1 className="text-2xl font-bold">Item Recommendation System</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Image on the left */}
            <td
              style={{
                width: '220px',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            >
              <img
                width="350"
                height="350"
                src="../4085219.jpg"
                className="img-fluid rounded"
                alt="Stats image"
              />
            </td>

            {/* Text on the right */}
            <td style={{ verticalAlign: 'middle' }}>
              {/* Form on the right */}
              <div className="col-md-9">
                <label className="block text-sm font-medium text-gray-700">
                  User ID:
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                >
                  <option value="">Select a User</option>
                  {userIds.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
                <br />

                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Item ID:
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                >
                  <option value="">Select an Item</option>
                  {itemIds.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
                <br />
                <button
                  className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
                  onClick={fetchRecommendations}
                  disabled={!selectedUser || !selectedItem || loading}
                >
                  {loading ? 'Loading...' : 'Get Recommendations'}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Recommendations;
