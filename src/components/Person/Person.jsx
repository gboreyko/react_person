import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    <p className="Person__partner">
      {!person.isMarried && 'I am not married'}
      {person.isMarried &&
        (person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`)}
    </p>
  </section>
);

/* export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    <div className="Person__partner">
      {!person.isMarried && <p>I am not married</p>}
      {person.isMarried &&
        (person.sex === 'm' ? (
          <p>{`${person.partnerName} is my wife`}</p>
        ) : (
          <p>{`${person.partnerName} is my husband`}</p>
        ))}
    </div>
  </section>
);
 */

/* export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    {person.isMarried &&
      (person.sex === 'm' ? (
        <p>{`${person.partnerName} is my wife`}</p>
      ) : (
        <p>{`${person.partnerName} is my husband`}</p>
      ))}
  </section>
);
 */
