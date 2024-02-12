function Profile({person, size=70}) {
  return (<section className="profile">
  <h2>{person.name}</h2>
  <img
    className="avatar"
    src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
    alt={person.name}
    width={size}
    height={size}
  />
  <ul>
    <li>
      <b>Profession: </b>
      {person.profession}
    </li>
    <li>
      <b>Awards: {person.awardCount} </b>
      ({person.awards})
    </li>
    <li>
      <b>Discovered: </b>
      {person.discovered}
    </li>
  </ul>
</section>);
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        person = {{name: "Maria Skłodowska-Curie", 
        profession: "physicist and chemist", 
        awardCount: 4, 
        awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
        discovered: "polonium (element)",
        imageId: "szV5sdGs"}}/>
      <Profile 
        person = {{name: "Katsuko Saruhashi", 
        profession: "geochemist", 
        awardCount: 2, 
        awards: "Miyake Prize for geochemistry, Tanaka Prize",
        discovered: "a method for measuring carbon dioxide in seawater",
        imageId:"YfeOqp2s"}}/>
    </div>
  );
}
