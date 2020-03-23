import React from 'react'

class DashNav extends React.Component {
    render() {
        return (
            <form>
                <div class="xxx">
                    <a href="/">Logout</a>
                    <a href="/tips">Tips</a>
                </div>
                <div className="navbar">
                    <div class="nav">
                        <a href="/map">Hungry?</a>
                    </div>
                </div>
            </form>
        );
    }
}

export default DashNav