package com.advanced_web_technologies.whatandwhere.repository

import com.advanced_web_technologies.whatandwhere.model.User
import org.springframework.data.repository.CrudRepository

interface UserRepository : CrudRepository<User, Long> {
    fun findByLogin(login: String): User?
}