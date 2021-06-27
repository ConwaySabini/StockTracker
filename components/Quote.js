const Quote = (props) => (
    <div>
        <h3></h3>
        <ul className="list-group">
            <li className="list-group-item">
                <p>Price: ${props.c}</p>
                <p>Low: ${props.l}   High: ${props.h}</p>
                <p>Previous Close: ${props.pc}   Open: ${props.o}</p>
            </li>
        </ul>
    </div>
);

export default Quote;