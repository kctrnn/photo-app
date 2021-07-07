# Mini Project: Photo App 👀

## Setup environment

Github Project: https://github.com/kctrnn/photo-app

### 1. Setup ReactJS App via Create React App

> Link: https://create-react-app.dev/docs/getting-started/

### 2. Add SCSS support

```js
npm i --save-dev node-sass
```

### 3. Add react router

```
npm i --save react-router-dom
```

### 4. Add UI lib

```
npm i react-bootstrap bootstrap@4.6.0
```

## Tổ chức folder

```
src
|__ assets
|  |__ images
|  |__ styles (global styles)
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js
```

## Tổ chức routing

- Sử dụng kĩ thuật lazy load components.
- Load theo features.

```js
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/photos' component={Photo} />
        <Route path='/user' component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
```

## Custom Field

- Cầu nối giữa UI control và React Hook Form.
- UI control là một controlled component với props:
  - name: tên xác định control
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: xác định khi nào thì control này bị touched

```js
const InputField = (props) => {
  const { name, label, form } = props;
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Control
            {...field}
            type='text'
            placeholder='Eg: Wow nature ...'
            autoComplete='off'
            isInvalid={!!errors[name]}
          />
        )}
      />
    </Form.Group>
  );
};
```

## Random Photo control

RandomPhoto
Props

- name
- imageUrl
- onImageUrlChange
- onRandomButtonBlur

RandomPhotoField

React Hook Form

Yup

## Feature Auth/Login

### 1. Setup userApi
- signIn(): Gửi username + password lên server để đổi lại một JWT token

```js
/api/userApi.js

const userApi = {
  login: (payload) => {
    const url = '/auth/local';
    return axiosClient.post(url, payload);
  },
};
```

### 2. Lưu thông tin user vào Redux
- Sau khi có thông tin token, lưu nó xuống localStorage (cùng với user)
- Lưu thông tin người dùng vào redux

```js
/app/userSlice.js

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  },

  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },
  },

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
```

### 3. Chuẩn bị login form (features/Auth/components/LoginForm/)
### 4. Handle login form submit
```js
const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);

      unwrapResult(resultAction);
      history.push('/photos');
    } catch (error) {
      console.log('Failed to login:', error);
    }
  };
  return (
    <div className='auth-login'>
      <h1 className='text-center'>Sign In</h1>
      
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
```

### 5. Tự động gắn JWT vào requests
```js
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {};

  const accessToken = localStorage.getItem(StorageKeys.TOKEN);
  if (accessToken) {
    customHeaders.Authorization = `Bearer ${accessToken}`; // ahjhj
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
  
  // return config
});
```
- An example of changing baseURL & headers
```js
/api/somethingApi.js

const getExternalApi = () => {
  const url = '/resource-name';
  const config = {
    baseURL: 'https://your-new-base-api-url.com/api',
    headers: {
      Authorization: 'your-new-token-to-use-in-new-api'
    },
  };

  return axiosClient.get(url, config);
}
```

Happy coding^^
