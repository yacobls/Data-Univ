import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <body>
        <div className="login-header"><h2>Welcome</h2></div>
        <table border="1">
          <tr>
            <th rowspan="2">No</th>
          </tr>

          <tr>
            <th>Nama Universitas</th>
          </tr>
          <tr>
            <td>1</td>
            <Popup
              trigger={<button>Universitas Indonesia</button>}
              position="bottom center"
            >
              <br />
              <td>Lokasi: Indonesia</td>
              <br />
              <td>Website:
              <a href="http://www.ui.ac.id/"> ui.ac.id</a>
              </td>
              <br />
            </Popup>
          </tr>
          <tr>
            <td>2</td>
            <Popup
              trigger={<button>Universitas Gunadarma</button>}
              position="right center"
            >
              <br />
              <td>Lokasi: Indonesia</td>
              <br />
              <td>Website:
                <a href="http://www.gunadarma.ac.id/"> gunadarma.ac.id</a>
              </td>
              <br />
            </Popup>
          </tr>
          <tr>
            <td>3</td>
            <Popup
              trigger={<button>Universitas Telkom</button>}
              position="right center"
            >
              <br />
              <td>Lokasi: Indonesia</td>
              <br />
              <td>Website:
                <a href="http://www.telkomuniversity.ac.id/"> telkomuniversity.ac.id
                </a>
              </td>
              <br />
            </Popup>
          </tr>
          <tr>
            <td>4</td>
            <Popup
              trigger={<button>Binus University</button>}
              position="right center"
            >
              <br />
              <td>Lokasi: Indonesia</td>
              <br />
              <td>Website:
                <a href="http://www.binus.ac.id/"> binus.ac.id</a>
              </td>
              <br />
            </Popup>
          </tr>
        </table>
      </body>
    );
  }
}

export default Info;
