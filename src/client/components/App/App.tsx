import * as React from 'react';
import SearchPodcast from '../podcast/search/Search';

export default class App extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="main-header">
                    <a href="#" className="logo">
                        <span className="logo-mini"><b>A</b>M</span>
                        <span className="logo-lg"><b>AUDIO</b>manager</span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="#">
                                        <i className="far fa-flag"></i>
                                        <span className="hidden-xs">Podcasts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-flag"></i>
                                        <span className="hidden-xs">Posts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-flag"></i>
                                        <span className="hidden-xs">Search</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-flag"></i>
                                        <span className="hidden-xs">YouTube</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li className="active"><a href="index.html"><i className="far fa-circle"></i> Dashboard v1</a></li>
                                    <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-files-o"></i>
                                    <span>Layout Options</span>
                                    <span className="pull-right-container">
                                      <span className="label label-primary pull-right">4</span>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                    <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                    <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                    <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/widgets.html">
                                    <i className="fa fa-th"></i> <span>Widgets</span>
                                    <span className="pull-right-container">
                                      <small className="label pull-right bg-green">new</small>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-pie-chart"></i>
                                    <span>Charts</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                                    <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                                    <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                                    <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-laptop"></i>
                                    <span>UI Elements</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                                    <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                                    <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                                    <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                                    <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                                    <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-edit"></i> <span>Forms</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                                    <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                                    <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-table"></i> <span>Tables</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                                    <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/calendar.html">
                                    <i className="fa fa-calendar"></i> <span>Calendar</span>
                                    <span className="pull-right-container">
                                      <small className="label pull-right bg-red">3</small>
                                      <small className="label pull-right bg-blue">17</small>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="pages/mailbox/mailbox.html">
                                    <i className="far fa-envelope"></i>
                                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                                    <span className="pull-right-container">
                                      <small className="label pull-right bg-yellow">12</small>
                                      <small className="label pull-right bg-green">16</small>
                                      <small className="label pull-right bg-red">5</small>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-folder"></i> <span>Examples</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
                                    <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o"></i> Profile</a></li>
                                    <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
                                    <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
                                    <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                                    <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                                    <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                                    <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                                    <li><a href="pages/examples/pace.html"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-share"></i> <span>Multilevel</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                    <li className="treeview">
                                        <a href="#"><i className="fa fa-circle-o"></i> Level One
                                            <span className="pull-right-container">
                                              <i className="fa fa-angle-left pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                            <li className="treeview">
                                                <a href="#"><i className="fa fa-circle-o"></i> Level Two
                                                    <span className="pull-right-container">
                                                      <i className="fa fa-angle-left pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                </ul>
                            </li>
                            <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                            <li className="header">LABELS</li>
                            <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                        </ul>
                    </section>
                </aside>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dashboard
                            <small>Control panel</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="far fa-dashboard"></i> Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>

                    <section className="content" id="root">
                        <SearchPodcast/>
                    </section>
                </div>
                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 2.4.0
                    </div>
                    <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
                    reserved.
                </footer>
                <aside className="control-sidebar control-sidebar-dark">
                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
                        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane" id="control-sidebar-home-tab">
                            <h3 className="control-sidebar-heading">Recent Activity</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                                            <p>Will be 23 on April 24th</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-user bg-yellow"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>

                                            <p>New phone +1(800)555-1234</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>

                                            <p>nora@example.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-file-code-o bg-green"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>

                                            <p>Execution time 5 seconds</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <h3 className="control-sidebar-heading">Tasks Progress</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Custom Template Design
                                            <span className="label label-danger pull-right">70%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-danger" style={{width: '70%'}}></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Update Resume
                                            <span className="label label-success pull-right">95%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-success" style={{width: '95%'}}></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Laravel Integration
                                            <span className="label label-warning pull-right">50%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-warning" style={{width: '50%'}}></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Back End Framework
                                            <span className="label label-primary pull-right">68%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-primary" style={{width: '68%'}}></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                        <div className="tab-pane" id="control-sidebar-settings-tab">
                            <form method="post">
                                <h3 className="control-sidebar-heading">General Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Report panel usage
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>

                                    <p>
                                        Some information about this general settings option
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Allow mail redirect
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>

                                    <p>
                                        Other sets of options are available
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Expose author name in posts
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>

                                    <p>
                                        Allow the user to show his name in blog posts
                                    </p>
                                </div>
                                <h3 className="control-sidebar-heading">Chat Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Show me as online
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Turn off notifications
                                        <input type="checkbox" className="pull-right"/>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Delete chat history
                                        <a href="javascript:void(0)" className="text-red pull-right"><i className="fa fa-trash-o"></i></a>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
                <div className="control-sidebar-bg"></div>
            </div>);
    }
}
