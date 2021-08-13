import React from 'react';

function CreateResource() {
  return (
    <div className='home'>
      <h1>Create Resource</h1>
      <table>
          <tr>
          <th>Resource:-</th>
          <td><select  name="typeName"></select></td>
          </tr>          
          <tr>
          <th>Resource ID:-</th>
          <td><input type="text" name="resId"></input></td>
          </tr>
          <tr>
          <th>Resource Name:-</th>
          <td><input type="text" name="resName"></input></td>
          </tr>
          <tr>
              <td>
                  <input type="submit" value="Add Resource"></input>
              </td>
          </tr>          
      </table>
    </div>
  );
}

export default CreateResource;