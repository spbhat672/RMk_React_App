import React from 'react';

function AddTagValue() {
  return (
    <div className='home'>
      <h1>Add Tag Value</h1>
      <table>
          <tr>
          <th>Resource Name:-</th>
          <td><select  name="resId"></select></td>
          </tr>
          <tr>
          <th>Tag Name:-</th>
          <td><select  name="tagId"></select></td>
          </tr>          
          <tr>
              <td>
                  <input type="submit" value="Add Tag Value"></input>
              </td>
          </tr>          
      </table>
    </div>
  );
}

export default AddTagValue;
