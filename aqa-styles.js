import '@polymer/polymer/polymer-element.js';
import '@aqa/aqa-font/aqa-trirong-font.js';
import './flexbox-grid.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
// 
$_documentContainer.innerHTML = `
<dom-module id="aqa-styles">
  <template>
    <style include="flexbox-grid">
    h2{
      color:red;
    }
    .test{
      color:blue;
    }
      paper-checkbox,
      paper-radio-button {
        font-family: TrirongLight;
      }

      .page-container {
        padding: 15px;
      }

      * {
        font-family: TrirongRegular;
      }

      .font-MitrLight {
        font-family: MitrLight;
      }

      div[main-title] {
        font-family: MitrLight;
      }

      div.header {
        font-family: MitrLight;
      }

      .modal-body {
        position: relative;
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        padding: 1rem;
        max-height: 400px;
        overflow-y: auto;
      }

      .modal-footer {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: end;
        justify-content: flex-end;
        padding: 1rem;
        border-top: 1px solid #e9ecef;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
