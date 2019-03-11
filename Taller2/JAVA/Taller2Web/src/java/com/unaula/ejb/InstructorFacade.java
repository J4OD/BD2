/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unaula.ejb;

import com.unaula.entity.Instructor;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author JAOD
 */
@Stateless
public class InstructorFacade extends AbstractFacade<Instructor> implements InstructorFacadeLocal {

    @PersistenceContext(unitName = "Taller2WebPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public InstructorFacade() {
        super(Instructor.class);
    }
    
}
