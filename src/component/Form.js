// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Styled from "styled-components";
//
// // import "./namafile.css";
//
// export default class Form extends Component {
//     static propTypes = {
//         prop: PropTypes,
//         title: PropTypes.string
//     };
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             name: "",
//             body: "",
//             element: []
//         };
//     }
//
//     handleChange = event => {
//         const { value, name } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };
//
//     handleSubmit = event => {
//         event.preventDefault();
//         const { element, name, body } = this.state;
//         if (name && body) {
//             const temp = {
//                 userId: "1",
//                 name,
//                 body
//             };
//             this.setState({ element: [...element, temp] });
//         }
//     };
//
//     renderList = data => {
//         console.log("data", data);
//
//         const temp = Object.keys(data).map(d => (
//             <Wrapper>
//                 <div>
//                     {d.name}: {d.value}
//                 </div>
//             </Wrapper>
//         ));
//
//         return data.name;
//     };
//
//     render() {
//         const { name, body, element } = this.state;
//         const { title } = this.props.title;
//         console.log("tem", element);
//         // URLNYA https://codeshare.io/5OPWzx
//         // nih https://codeshare.io/G69xgO
//
//         const inlineCSS = {
//             backgroundColor: "blue"
//         };
//
//         // https://codepen.io/besatria/pen/dyovBBy
//         return (
//             <div>
//                 {title}
//                 <form onSubmit={this.handleSubmit}>
//                     <InputStyled
//                         onChange={this.handleChange}
//                         type="text"
//                         name="name"
//                         id="name"
//                         className="primary"
//                         style={inlineCSS} //css inline
//                         value={name}
//                     />
//                     <InputStyled
//                         onChange={this.handleChange}
//                         type="text"
//                         name="body"
//                         style={{ backgrundColor: "black" }}
//                         id="body"
//                         value={body}
//                     />
//                     <button onClick={this.handleSubmit} type="submit">
//                         Submit
//                     </button>
//                 </form>
//                 {element.length > 0 &&
//                 element.map(val => (
//                     <div>
//                         <Wrapper style={{ display: "flex" }}>
//                             <div>{val.id}</div>
//                             <div>{val.name}</div>
//                             <div>{val.body}</div>
//                         </Wrapper>
//                     </div>
//                 ))}
//                 {/* {this.renderList(formData)} */}
//                 {/* {this.state.elemenet} */}
//             </div>
//         );
//     }
// }
//
// const Wrapper = Styled.div`
//     div{
//         border: 1px solid white;
//     }
// `;
//
// const InputStyled = Styled.input`
//     border-color: red;
//     ::placeholder{
//         color: blue;
//     }
//     ${({ name }) => name === "body" && `background-color: red`}
//     ${({ id }) => (id === 2 ? `color: blue` : `color: red`)}
// `;
//
// const ButtonStyed = Styled.button`
//     width: 300px;
//     background-color: darkcyan;
//     border: none;
// `;
