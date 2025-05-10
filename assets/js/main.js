/**
 * Main JavaScript file for Dilon Concept Website
 * Author: Dilon Concept Foundation
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                item.classList.toggle('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Form validation for volunteer form
    const volunteerForm = document.getElementById('volunteer-form');
    
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = volunteerForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = volunteerForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // Show success message
                const formContainer = volunteerForm.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<h3>Thank you for volunteering!</h3><p>We appreciate your interest in supporting the Dilon Concept. We will contact you shortly with information about your free Dilonland DAO citizenship and next steps.</p>';
                
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
                
                // In a real implementation, you would send the form data to a server here
            }
        });
    }
    
    // Donation amount selection
    const donationOptions = document.querySelectorAll('.donation-amount-option');
    const customAmountInput = document.getElementById('custom-amount');
    
    if (donationOptions.length > 0 && customAmountInput) {
        donationOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                donationOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Clear custom amount if a preset amount is selected
                customAmountInput.value = '';
            });
        });
        
        customAmountInput.addEventListener('focus', function() {
            // Remove active class from preset options when custom amount is focused
            donationOptions.forEach(opt => opt.classList.remove('active'));
        });
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add fixed header class on scroll
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        });
    }
    
    // Initialize GoFundMe widget if present
    const gofundmeContainer = document.getElementById('gofundme-widget');
    
    if (gofundmeContainer) {
        // This is a placeholder for the actual GoFundMe embed code
        // In a real implementation, you would include the official GoFundMe embed script
        console.log('GoFundMe widget container detected');
    }
    
    // Dilonland DAO citizenship counter
    const citizenshipCounter = document.getElementById('citizenship-counter');
    
    if (citizenshipCounter) {
        // Simulate a counter that increases over time
        let count = 1250; // Starting count
        
        function updateCounter() {
            count += Math.floor(Math.random() * 3); // Random increase
            citizenshipCounter.textContent = count.toLocaleString();
        }
        
        // Update every 5 seconds
        updateCounter();
        setInterval(updateCounter, 5000);
    }
});
