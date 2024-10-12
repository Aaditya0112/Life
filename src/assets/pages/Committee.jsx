import "../stylesheets/Committee.css"
const Committee = () => { 
    return(<>
         <header>
        <h1 className="lgreen">Our Committee Members</h1>
        
    </header>

    <section class="committee">
        <div class="member text-lg">
            <h2 className="text-2xl">Prof. Hari Krishna Padavala</h2>
            <p class="role">Lead</p>
        </div>

        <div class="member">
            <h2 className="text-2xl">Mr. Rahul Joshi</h2>
            <p class="role"></p>
        </div>
        <div class="member">
            <h2 className="text-2xl">Prof. Amarendra Edpuganti</h2>
            <p class="role"></p>
        </div>

        <div class="member">
            <h2 className="text-2xl">Prof. Gururaj M V</h2>
            <p class="role"></p>
        </div>

        <div class="member">
            <h2 className="text-2xl">Mr. Gajendra</h2>
            <p class="role"></p>
        </div>
    </section>
        </>
    )
}
export default Committee;