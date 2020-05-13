import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'hugo-alert',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() type: string;
  @Prop() button: boolean;
  @State() isShow = true;

  mapColor() {
    const mapColors = {
      error: '#ff3535',
      information: '#2175d6'
    }
    return mapColors[this.type]
  }


  close() {
    this.isShow = false;
  }



  render() {
    if (this.isShow === true) {
      return (
        <div class={'alert-content ' + this.type}>
          {this.isShow}
          <div class="icon-alert">

            {
              this.type == 'error'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#ff3535"
                    d="M8.075 6.312a.652.652 0 0 1-.659-.646c0-.356.295-.645.66-.645.364 0 .659.289.659.645a.652.652 0 0 1-.66.646zm.66 4.507a.652.652 0 0 1-.66.644.652.652 0 0 1-.659-.644V7.601c0-.356.295-.644.66-.644.364 0 .659.288.659.644zm7.218-3.417C15.755 3.126 12.025-.184 7.622.008 3.219.2-.19 3.823.008 8.098a7.343 7.343 0 0 0 .957 3.814c.169.308.198.67.08 1L.24 15.344a.31.31 0 0 0 .08.338.333.333 0 0 0 .352.062l2.219-.838c.377-.154.806-.13 1.162.064a8.175 8.175 0 0 0 8.334-.23c2.511-1.594 3.89-4.422 3.565-7.319z" />
                </svg>
                : <div></div>
            }

            {
              this.type == 'information'
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" >
                  <path fill="#2175d6"
                    d="M11.333 4.6H4a.667.667 0 1 1 0-1.333h7.333a.667.667 0 1 1 0 1.333zM8.667 7.277H4a.67.67 0 0 1-.667-.672A.67.67 0 0 1 4 5.933h4.667c.368 0 .666.301.666.672a.67.67 0 0 1-.666.672zM14 0H2a2 2 0 0 0-2 2v7.333a2 2 0 0 0 2 2h.173c.184 0 .334.15.334.334v1.873a.467.467 0 0 0 .793.327l2.147-2.147c.249-.25.587-.392.94-.393H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                </svg >
                : <div></div>
            }

          </div >
          <div class="main-content">
            <slot></slot>
          </div>
          <div onClick={() => this.close()} class="btn-close" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill={this.mapColor()}
                d="M10.827 10.827a.667.667 0 0 1-.94 0L8 8.94l-1.887 1.887a.667.667 0 0 1-.94-.94L7.06 8 5.173 6.113a.667.667 0 0 1 .94-.94L8 7.06l1.887-1.887a.667.667 0 0 1 .94.94L8.94 8l1.887 1.887c.258.26.258.68 0 .94zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
            </svg>
          </div >
        </div >

      )
    } else {
      return
    }

  }
}
