"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitBooking(prevState, formData) {
    try {
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        if (!email || !firstName || !lastName) {
            return { success: false, message: 'Please fill in all required fields.' };
        }

        const { data, error } = await resend.emails.send({
            from: 'Belgrade E-Bikes <onboarding@belgrade-ebikes.com>', // Use the default testing domain provided by Resend or your verified domain
            to: ['zecevic144@gmail.com'],
            subject: `New Booking Request from ${firstName} ${lastName}`,
            html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return { success: false, message: 'Failed to send email. Please try again.' };
        }

        return { success: true, message: 'Booking request sent successfully!' };
    } catch (error) {
        console.error('Submission error:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
