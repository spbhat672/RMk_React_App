import React from 'react';

function CreateStatus() {
  return (
    <div>
     <h5>Create Status</h5>
      <table>
          <tr>
          <th>Status ID:-</th>
          <td><input type="text" name="statusId"></input></td>
          </tr>
          <tr>
          <th>Status Name:-</th>
          <td><input type="text" name="statusName"></input></td>
          </tr>
          <tr>
              <td>
                  <input type="submit" value="Add Status"></input>
              </td>
          </tr>          
      </table>
    </div>
  );
}

export default CreateStatus;