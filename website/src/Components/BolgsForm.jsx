import '../Modules/blogs.css';

export default function BlogsForm(){
    return(
        <div className="contanier">
            <h1>Vlogs Form</h1>
            <div className="content">
                <table>
                    <tr><td>
                <lable>Name</lable>
                <input type="text" className=""></input>
                </td></tr>
                <tr><td>
                <lable>Class</lable>
                <select>
                    <option> </option>
                    <option>Grade 12</option>
                    <option>Grade 13</option>
                </select>
                </td></tr>
                <tr><td>
                <lable>Write Vlog</lable>
                <textarea>

                </textarea>
                </td></tr>
                </table>
                <tr>
                    <td><input type="submit"></input>
                    <input type="reset"></input>
                    </td>
                </tr>

            </div>


        </div>
    );
}