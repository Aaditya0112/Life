import "../stylesheets/Committee.css"
const Committee = () => { 
    return(<>
         <header>
        <h1 className="lgreen">Our Committee Members</h1>
        
    </header>

    <section class="committee">
        <div class="member">
            <h2>Prof. Hari Krishna</h2>
            <p class="role">Lead</p>
        </div>

        <div class="member">
            <h2>Mr. Rahul Joshi</h2>
            <p class="role"></p>
        </div>
        <div class="member">
            <h2>Prof. Amarendra Edpuganti</h2>
            <p class="role"></p>
        </div>

        <div class="member">
            <h2>Prof. Gururaj M V</h2>
            <p class="role"></p>
        </div>

        <div class="member">
            <h2>Mr. Gajendra</h2>
            <p class="role"></p>
        </div>
    </section>
        </>
    )
}
export default Committee;