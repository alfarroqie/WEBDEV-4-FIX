<template>
    <div class="vue-template">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Username</label>
                <input type="username" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>email</label>
                <input type="email" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-account">
                Already registered?
                <router-link :to="{username: 'login'}">sign in</router-link>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>