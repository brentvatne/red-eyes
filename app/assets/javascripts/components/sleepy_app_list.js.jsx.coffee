SleepyAppList = React.createClass
  handleSleepyAppSubmit: (options) ->
    $.post('/sleepy_apps', options,
      ((sleepyApps) => @setState(sleepyApps: sleepyApps))).
      error((err) -> console.error('/sleepyApps', status, err.toString()))

  handleSleepyAppClear: ->
    $.get('/sleepy_apps/wake_all',
      ((sleepyApps) => @setState(sleepyApps: sleepyApps)))

  handleSleepyAppClear: ->
    $.post('/sleepy_apps/clear_deactivated',
      ((sleepyApps) => @setState(sleepyApps: sleepyApps)))

  loadSleepyAppsFromServer: ->
    $.ajax
      url: @props.url
      dataType: 'json'
      success: (sleepyApps) =>
        @setState(sleepyApps: sleepyApps)
      error: (xhr, status, err) =>
        console.error(@props.url, status, err.toString())

  getInitialState: ->
    { sleepyApps: [] }

  componentDidMount: ->
    @loadSleepyAppsFromServer()
    setInterval(@loadSleepyAppsFromServer.bind(@), 60000)

  render: ->
    self = @
    sleepyAppItems = @state.sleepyApps.map((sleepyApp) ->
      `<SleepyApp updateActiveStatus={self.loadSleepyAppsFromServer}
                  url={sleepyApp.url}
                  active={sleepyApp.active}
                  lastWokenUpAt={sleepyApp.last_woken_up_at}
                  id={sleepyApp.id}>
       </SleepyApp>`
    )

    `<div class="sleepy-app-list">
      <hr/>
      <NewSleepyAppForm onSleepyAppSubmit={this.handleSleepyAppSubmit}/>
      <table className='table'>
        <thead>
          <tr>
            <th className='sleepy-app-active-col'></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sleepyAppItems}
        </tbody>
      </table>
      <SleepyAppWakeAllButton onWakeAll={this.handleWakeAll}/>
      <SleepyAppClearButton onSleepyAppClear={this.handleSleepyAppClear}/>
     </div>`

SleepyApp = React.createClass
  activate: ->
    $.post("/sleepy_apps/#{@props.id}/activate", =>
      @props.updateActiveStatus()
    )

  deactivate: ->
    $.post("/sleepy_apps/#{@props.id}/deactivate", =>
      @props.updateActiveStatus()
    )

  render: ->
    if @props.active
      classes = 'sleepy-app active'
    else
      classes = 'sleepy-app'

    `<tr className={classes}>
      <td className='sleepy-app-active-col'>
        <SleepyAppActiveCheckbox
          active={this.props.active}
          onActivate={this.activate}
          onDeactivate={this.deactivate} />
      </td>
      <td>
        {this.props.url}
      </td>
      <td>
        {this.props.lastWokenUpAt || "Never woken up by us"}
      </td>
    </tr>`

SleepyAppWakeAllButton = React.createClass
  handleSubmit: (e) ->
    e.preventDefault()
    @props.onWakeAll()

  render: ->
    `<a onClick={this.handleSubmit} className='btn btn-default'>
      Wake up all apps now
     </a>`

SleepyAppClearButton = React.createClass
  handleSubmit: (e) ->
    e.preventDefault()
    @props.onSleepyAppClear()

  render: ->
    `<a onClick={this.handleSubmit} className='btn btn-default'>
      Clear deactivated
     </a>`

NewSleepyAppForm = React.createClass
  handleSubmit: (e) ->
    e.preventDefault()
    url = @refs.url.getDOMNode().value.trim()
    return if !url
    @props.onSleepyAppSubmit(url: url)
    @refs.url.getDOMNode().value = ''

  render: ->
    `<form className="new-sleepy-app-form form-inline" onSubmit={this.handleSubmit}>
       <div className="form-group">
         <div className="input-group">
           <div className="input-group-addon">http://</div>
           <input className="form-control" ref="url" id="sleepy-app-url" type="text"
                  placeholder="What Heroku app should we keep awake?" />
           <a onClick={this.handleSubmit}
              className="btn btn-default input-group-addon">
             Add site
           </a>
         </div>
       </div>
     </form>`

SleepyAppActiveCheckbox = React.createClass
  handleUpdateActiveStatus: () ->
    $el = $(@refs.active.getDOMNode())
    checked = $el.is(':checked')

    if checked
      @props.onActivate()
    else
      @props.onDeactivate()

  render: ->
    `<input type="checkbox" checked={this.props.active} ref="active" onClick={this.handleUpdateActiveStatus} />`

window.NewSleepyAppForm = NewSleepyAppForm
window.SleepyAppActiveCheckbox = NewSleepyAppForm
window.SleepyAppList = SleepyAppList
window.SleepyApp = SleepyApp
window.SleepyAppClearButton = SleepyAppClearButton
