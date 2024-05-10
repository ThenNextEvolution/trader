import "./user.css"
export default function Userhome() {
    return (
        <>
            <head>
            <link rel="stylesheet" href="user.css " />
        </head>
            <div class="userHome">
                <section class="sidebar">

                    <div id="nav-bar">
                        <input id="nav-toggle" type="checkbox" />
                        <div id="nav-header"><a id="nav-title" href="https://codepen.io" target="_blank"><i
                            class="fab fa-codepen"></i>Trader</a>
                            <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
                            <hr />
                        </div>
                        <div id="nav-content">
                            <div class="nav-button"><i class=""></i><span>Your Trader</span></div>
                            <div class="nav-button"><i class=""></i><span>messages</span></div>
                            <div class="nav-button"><i class=""></i><span>Offers</span></div>
                            <hr />
                            <div class="nav-button"><i class=""></i><span>Following</span></div>
                            <div class="nav-button"><i class=""></i><span>Trending</span></div>
                           
                        <input id="nav-footer-toggle" type="checkbox" />
                        <div id="nav-footer">
                            <div id="nav-footer-heading">
                                <div id="nav-footer-avatar"><img
                                    src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>
                                <div id="nav-footer-titlebox"><a id="nav-footer-title"
                                    href="https://codepen.io/uahnbu/pens/public" target="_blank">User</a><span
                                        id="nav-footer-subtitle">Admin</span></div>
                                <label for="nav-footer-toggle"><i class="fas fa-caret-up"></i></label>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div class="holder">
                        <section class="trades">

                            <h1>Current trades</h1>
                            <div class="table">
                                <div class="row header tbl-header">
                                    <div class="cell">Code</div>
                                    <div class="cell">Company</div>
                                    <div class="cell">Price</div>
                                    <div class="cell">Change</div>
                                    <div class="cell">Change %</div>
                                </div>
                                <div class="row">
                                    <div class="cell">AAC</div>
                                    <div class="cell">AUSTRALIAN COMPANY</div>
                                    <div class="cell">$1.38</div>
                                    <div class="cell">+2.01</div>
                                    <div class="cell">-0.36%</div>
                                </div>
                                <div class="row">
                                    <div class="cell">AAD</div>
                                    <div class="cell">AUSENCO</div>
                                    <div class="cell">$2.38</div>
                                    <div class="cell">-0.01</div>
                                    <div class="cell">-1.36%</div>
                                </div>
                                <div class="row">
                                    <div class="cell">AAX</div>
                                    <div class="cell">ADELAIDE</div>
                                    <div class="cell">$3.22</div>
                                    <div class="cell">+0.01</div>
                                    <div class="cell">+1.36%</div>
                                </div>
                                <div class="row">
                                    <div class="cell">XXD</div>
                                    <div class="cell">ADITYA BIRLA</div>
                                    <div class="cell">$1.02</div>
                                    <div class="cell">-1.01</div>
                                    <div class="cell">+2.36%</div>
                                </div>
                               
                            </div>

                        </section>
                        <section class="posts">

                            <h1>Fixed Table header</h1>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Company</th>
                                            <th>Price</th>
                                            <th>Change</th>
                                            <th>Change %</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section class="messages">

                            <h1>Fixed Table header</h1>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Company</th>
                                            <th>Price</th>
                                            <th>Change</th>
                                            <th>Change %</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAC</td>
                                            <td>AUSTRALIAN COMPANY </td>
                                            <td>$1.38</td>
                                            <td>+2.01</td>
                                            <td>-0.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAD</td>
                                            <td>AUSENCO</td>
                                            <td>$2.38</td>
                                            <td>-0.01</td>
                                            <td>-1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>AAX</td>
                                            <td>ADELAIDE</td>
                                            <td>$3.22</td>
                                            <td>+0.01</td>
                                            <td>+1.36%</td>
                                        </tr>
                                        <tr>
                                            <td>XXD</td>
                                            <td>ADITYA BIRLA</td>
                                            <td>$1.02</td>
                                            <td>-1.01</td>
                                            <td>+2.36%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>


                    </div>

                </section>
            </div>

        </>
    );

}