import React from 'react'
import FillerText from './FillerText'

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <title>`The world's coolest webpage`</title>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage

// class Tweet extends React.Component {
//   render() {
//     return (
//       <div className="tweet">
//         <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
//         <div className="tweet__body">
//           <p>We are writing this tweet in JSX. Holy moly!</p>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Tweet;
