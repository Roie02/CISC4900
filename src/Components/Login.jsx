function Login({form, setForm, handleSubmit}){

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return(

    <div id='login-div'>
    <form onSubmit={handleSubmit} className='login-form'>
      <label htmlFor="username">Username:</label>
      <br />
      <input
        type='text'
        id='username'
        placeholder='Username'
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        type='password'
        id='password'
        placeholder='Password'
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <br />
      <input
        type='submit'
        value='Log In'
      />
    </form>
  </div>
);
}


export default Login