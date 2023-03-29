package com.advanced_web_technologies.whatandwhere.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id

@Entity
class User (
        var login: String,
        var firstname: String,
        var lastname: String,
        var email: String,
        var phone: String,
        var photo: String,
        var score: Double,
        var description: String? = null,
        @Id @GeneratedValue var id: Long? = null)